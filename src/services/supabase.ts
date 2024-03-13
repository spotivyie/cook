import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ""
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_AMON_KEY ?? ""

export const supabase = createClient(supabaseUrl, supabaseKey)