const { createClient } = require("@supabase/supabase-js");

const supabaseClient = async(supabaseAccessToken) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_URL, {
            global: { headers: {Authorization: `Bearer ${supabaseAccessToken}`}}
        }
    );
}