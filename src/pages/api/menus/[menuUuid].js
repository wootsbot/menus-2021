import supabase from 'utils/supabaseClient';

export default async function menusUpdatePrice(req, res) {
  const { menuUuid } = req.query;
  const { price } = req.body;

  const { data, error } = await supabase
    .from('menus')
    .update({ price })
    .match({ uuid: menuUuid });

  if (error) {
    return res.status(401).json({ error: error.message, code: error.code });
  }

  return res.status(200).json(data);
}
