import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pojbjevscfvivxuhumjv.supabase.co";

export const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvamJqZXZzY2Z2aXZ4dWh1bWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyODEzMjAsImV4cCI6MjAyNzg1NzMyMH0.nXquXC9pX-Oq8g3fTL3qqCNz8nmwPoDxEPbQWgjN_N0";

console.log({ supabaseUrl, supabaseKey });
const supabase = createClient(supabaseUrl, supabaseKey);

export const imageBucketName = "wild-oasis-images";

export default supabase;
