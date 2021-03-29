import supabase from 'utils/supabaseClient';

export default async function menus(req, res) {
  const { data, error } = await supabase.from('menus').select(
    `
    uuid,
    name,
    description,
    image,
    price
  `
  );

  if (error) {
    return res.status(401).json({ error: error.message, code: error.code });
  }

  return res.status(200).json(data);
}
