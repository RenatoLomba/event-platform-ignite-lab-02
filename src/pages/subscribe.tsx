import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CodeMockupBackground from '../assets/images/code-mockup.png';
import { Footer } from '../components/footer';
import { Input } from '../components/input';
import { LogoIgnite } from '../components/logo-ignite';
import { Button } from '../components/shared/button';
import { useCreateSubscriberMutation } from '../graphql/generated';

export const SubscribePage: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    await createSubscriber({ variables: { name, email } });

    navigate('/event');
  };

  return (
    <div className="flex flex-col max-h-screen overflow-auto">
      <div className="flex-1 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="max-w-[1100px] w-full flex flex-col lg:flex-row gap-6 items-center justify-between mt-10 lg:mt-20 mx-auto">
          <div className="max-w-[640px] px-6 flex flex-col items-center lg:items-start">
            <LogoIgnite />

            <h1 className="mt-8 text-[2rem] lg:text-[2.5rem] font-medium leading-tight text-center lg:text-left">
              Construa uma{' '}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>

            <p className="mt-4 text-sm text-gray-200 leading-relaxed text-center lg:text-left">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full"
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Seu nome completo"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu e-mail"
              />

              <Button type="submit" className="mt-4" isLoading={loading}>
                GARANTIR MINHA VAGA
              </Button>
            </form>
          </div>
        </div>

        <img src={CodeMockupBackground} className="mt-10" alt="Code mockup" />
      </div>

      <div className="px-6 pb-6">
        <Footer />
      </div>
    </div>
  );
};
