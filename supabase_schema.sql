-- Supabase Schema for Philosophy Classes App

-- 1. Metadata
CREATE TABLE book_metadata (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author TEXT NOT NULL,
    presentation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Series
CREATE TABLE series (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    number INTEGER NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Bimestres
CREATE TABLE bimestres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    serie_id UUID REFERENCES series(id) ON DELETE CASCADE,
    number INTEGER NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Classes
CREATE TABLE classes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bimestre_id UUID REFERENCES bimestres(id) ON DELETE CASCADE,
    class_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    theory_title TEXT NOT NULL,
    theory_content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Class Objectives
CREATE TABLE class_objectives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Theory Sections
CREATE TABLE theory_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    items JSONB NOT NULL, -- Array of strings
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Methodology Steps
CREATE TABLE methodology_steps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT NOT NULL,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Activities
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    questions JSONB, -- Array of strings
    table_data JSONB, -- Object with headers and rows
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Reflection Questions
CREATE TABLE reflection_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE book_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE series ENABLE ROW LEVEL SECURITY;
ALTER TABLE bimestres ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_objectives ENABLE ROW LEVEL SECURITY;
ALTER TABLE theory_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodology_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE reflection_questions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access" ON book_metadata FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON series FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON bimestres FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON classes FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON class_objectives FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON theory_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON methodology_steps FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON activities FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON reflection_questions FOR SELECT USING (true);
