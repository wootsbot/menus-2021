/* eslint-disable max-len */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fcrhlbdemzohxrnvzvfo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjk5OTM0MiwiZXhwIjoxOTMyNTc1MzQyfQ.gI6QOiKc1xeN69Oxb-mxIfg0Z3jpgrmgtnS3LTCTCYo'
);

export default supabase;
