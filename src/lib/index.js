import { supabase } from "./initSupabase";

export async function fetchProjects() {
  let { data: projects, error } = await supabase.from("projects").select("*");
  if (error) throw error;
  return projects;
}
