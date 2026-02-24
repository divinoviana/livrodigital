import { supabase } from './supabase';
import { BookContent, Serie, Bimestre, Class } from '../data/types';

export async function fetchBookContent(): Promise<BookContent | null> {
  try {
    // 1. Fetch Metadata
    const { data: metadata, error: metaError } = await supabase
      .from('book_metadata')
      .select('*')
      .single();

    if (metaError) throw metaError;

    // 2. Fetch Series
    const { data: seriesData, error: seriesError } = await supabase
      .from('series')
      .select('*')
      .order('number', { ascending: true });

    if (seriesError) throw seriesError;

    const fullSeries: Serie[] = [];

    for (const serie of seriesData) {
      // 3. Fetch Bimestres for each Serie
      const { data: bimestresData, error: bimError } = await supabase
        .from('bimestres')
        .select('*')
        .eq('serie_id', serie.id)
        .order('number', { ascending: true });

      if (bimError) throw bimError;

      const fullBimestres: Bimestre[] = [];

      for (const bimestre of bimestresData) {
        // 4. Fetch Classes for each Bimestre
        const { data: classesData, error: classError } = await supabase
          .from('classes')
          .select('*')
          .eq('bimestre_id', bimestre.id)
          .order('class_number', { ascending: true });

        if (classError) throw classError;

        const fullClasses: Class[] = [];

        for (const cls of classesData) {
          // 5. Fetch related data for each Class
          const [
            { data: objectives },
            { data: theorySections },
            { data: methodology },
            { data: activities },
            { data: reflectionQuestions }
          ] = await Promise.all([
            supabase.from('class_objectives').select('content').eq('class_id', cls.id).order('order_index'),
            supabase.from('theory_sections').select('title, items').eq('class_id', cls.id).order('order_index'),
            supabase.from('methodology_steps').select('title, duration, description').eq('class_id', cls.id).order('order_index'),
            supabase.from('activities').select('title, description, questions, table_data').eq('class_id', cls.id).order('order_index'),
            supabase.from('reflection_questions').select('content').eq('class_id', cls.id).order('order_index')
          ]);

          fullClasses.push({
            id: cls.id,
            class_number: cls.class_number,
            title: cls.title,
            objectives: objectives?.map(o => o.content) || [],
            theory: {
              title: cls.theory_title,
              content: cls.theory_content,
              sections: theorySections?.map(s => ({ title: s.title, items: s.items })) || []
            },
            methodology: {
              steps: methodology || []
            },
            activities: activities?.map(a => ({
              title: a.title,
              description: a.description,
              questions: a.questions,
              table: a.table_data
            })) || [],
            reflectionQuestions: reflectionQuestions?.map(q => q.content) || []
          });
        }

        fullBimestres.push({
          id: bimestre.id,
          number: bimestre.number,
          title: bimestre.title,
          classes: fullClasses
        });
      }

      fullSeries.push({
        id: serie.id,
        number: serie.number,
        title: serie.title,
        bimestres: fullBimestres
      });
    }

    return {
      author: metadata.author,
      presentation: metadata.presentation,
      series: fullSeries
    };
  } catch (error) {
    console.error('Error fetching book content:', error);
    return null;
  }
}
