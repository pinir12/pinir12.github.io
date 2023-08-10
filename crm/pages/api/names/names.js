import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    //const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    //const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcnBsZWFsZmdqYnZ2bW1pcnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxOTM3NDEsImV4cCI6MjAwNTc2OTc0MX0.qxXeDloWXFVOJgAXsk2eG9a9XDX7fKmGfzdADlsAYmE"
const supabaseUrl = "https://hkrplealfgjbvvmmirqr.supabase.co"


    const supabase = createClient(supabaseUrl, supabaseKey);


if (req.query.datatype) {
    const type = req.query.datatype;
    if (type == 'teams') {
    const { data, error } = await supabase
    .from('names')
    .select('*')
    .limit(15)
    .eq('type', "Team")
    .order('created_at', { ascending: false })
    res.status(200).json(data);
    } else if (type == 'donors') {
        const { data, error } = await supabase
        .from('names')
        .select('*')
        .eq('type', "Donor")
        .limit(15)
        .order('created_at', { ascending: false })
        res.status(200).json(data);
    }
}
    




    let { data: names, error } = await supabase
        .from('names')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(15)

    res.status(200).json(names);
}