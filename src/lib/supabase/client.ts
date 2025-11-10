import { createClient } from '@supabase/supabase-js';

// Supabase client with scoped authentication for tenant/project isolation
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiNzYxZmQ3OWEtYWUxYS00ZmVjLWE4YjgtOGM0YjhlYjMzM2NhIiwianRpIjoiNWNmODRlODMtZTk3Zi00NzY0LTg2OWQtM2FlZTc1NTc3MDdjIiwiaWF0IjoxNzYyNzQ1OTcyLCJleHAiOjE3NjI3NDg2NzJ9.wkRrLvPVqJhnTLA72VZPL3N9fpqdTtoKE-N796s_Hd0`
      }
    }
  }
);

// Tenant and project IDs for reference
export const TENANT_ID = 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2';
export const PROJECT_ID = '761fd79a-ae1a-4fec-a8b8-8c4b8eb333ca';
