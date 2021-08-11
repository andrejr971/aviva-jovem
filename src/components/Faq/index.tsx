import { useState } from 'react';
import {
  FiCalendar,
  FiChevronDown,
  FiHelpCircle,
  FiMapPin,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { Card, CardBody, Container } from './styles';

export function Faq() {
  const { handleShareLocation } = useAction();

  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <ul>
        <Card>
          <header>
            <div>
              <div>
                <FiHelpCircle />
              </div>
              <h4>Vai ter Aviva Jovem?</h4>
            </div>

            <button
              onClick={() => setSelected(0)}
              className={selected === 0 ? 'active' : ''}
            >
              <FiChevronDown />
            </button>
          </header>
          <CardBody className={selected === 0 ? 'active' : ''}>
            <p>
              A Edição #5 do Aviva Jovem de Vargem Grande Paulista, vai
              acontecer!
            </p>
          </CardBody>
        </Card>
        <Card>
          <header>
            <div>
              <div>
                <FiUsers />
              </div>
              <h4>Terá participação presencial na igreja?</h4>
            </div>

            <button
              onClick={() => setSelected(1)}
              className={selected === 1 ? 'active' : ''}
            >
              <FiChevronDown />
            </button>
          </header>
          <CardBody className={selected === 1 ? 'active' : ''}>
            <p>Sim!</p>
          </CardBody>
        </Card>
        <Card>
          <header>
            <div>
              <div>
                <FiCalendar />
              </div>
              <h4>Quando vai acontecer o Aviva?</h4>
            </div>

            <button
              onClick={() => setSelected(2)}
              className={selected === 2 ? 'active' : ''}
            >
              <FiChevronDown />
            </button>
          </header>
          <CardBody className={selected === 2 ? 'active' : ''}>
            <p>Será realizado no dia 18 de Setembro de 2021.</p>
          </CardBody>
        </Card>
        <Card>
          <header>
            <div>
              <div>
                <FiMapPin />
              </div>
              <h4>Onde vai acontecer o aviva?</h4>
            </div>

            <button
              onClick={() => setSelected(3)}
              className={selected === 3 ? 'active' : ''}
            >
              <FiChevronDown />
            </button>
          </header>
          <CardBody className={selected === 3 ? 'active' : ''}>
            <p>
              Será realizado no Templo Sede Regional da Assembleia de Deus -
              min. do Ferreira de Vargem Grande. Rua Nova Esperança, 64 - Jd.
              São Judas - Vargem Grande Paulista.
            </p>
            <Button type="button" display="true" onClick={handleShareLocation}>
              <FiMapPin />
              <span>Como chegar</span>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <header>
            <div>
              <div>
                <FiUserPlus />
              </div>
              <h4>Quem poderá participar presencialmente no templo?</h4>
            </div>

            <button
              onClick={() => setSelected(4)}
              className={selected === 4 ? 'active' : ''}
            >
              <FiChevronDown />
            </button>
          </header>
          <CardBody className={selected === 4 ? 'active' : ''}>
            <p>Jovens abaixo de 100 anos, e pessoas foras do grupo de risco.</p>
          </CardBody>
        </Card>
      </ul>
    </Container>
  );
}
