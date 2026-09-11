RESOLVEJA — VERSÃO SUPABASE

1. Abra config.js.
2. Cole a URL do seu projeto Supabase em SUPABASE_URL.
3. Cole a chave PUBLISHABLE do Supabase em SUPABASE_PUBLISHABLE_KEY.
4. NUNCA coloque service_role/secret key neste projeto frontend.
5. Abra index.html ou publique a pasta no Vercel.

BANCO
- O frontend usa Supabase Auth.
- Clientes são gravados em public.usuarios.
- Candidaturas profissionais são gravadas em public.profissionais.
- As 5 referências são gravadas em public.referencias.
- Solicitações são gravadas em public.servicos.
- Profissionais exibidos do banco precisam estar status=aprovado e verificado=true.

SEGURANÇA
- RLS deve permanecer ativo.
- Administradores e logs não devem receber policy pública.
- Aprovação administrativa real deve ser feita por backend/Edge Function com controle de cargo.
- Não use localStorage para definir admin/master.
- A regra de avaliação deve exigir servico_id e serviço concluído.

IMPORTANTE SOBRE E-MAIL
Se a confirmação de e-mail estiver ativada no Supabase, o usuário precisa confirmar o e-mail antes de a sessão ficar disponível para o frontend.

SQL EXTRA DE SEGURANÇA RECOMENDADO
Depois de testar, impeça cliente de marcar serviço como concluído diretamente:

create or replace function public.impedir_cliente_concluir_servico()
returns trigger
language plpgsql
security invoker
as $$
begin
    if auth.uid() = new.cliente_id
       and new.status = 'concluido'
       and old.status <> 'concluido' then
        raise exception 'Cliente não pode concluir o próprio serviço';
    end if;
    return new;
end;
$$;

drop trigger if exists trg_impedir_cliente_concluir_servico on public.servicos;
create trigger trg_impedir_cliente_concluir_servico
before update on public.servicos
for each row
execute function public.impedir_cliente_concluir_servico();
