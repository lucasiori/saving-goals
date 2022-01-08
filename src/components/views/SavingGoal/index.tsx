import Button from '../../Button';
import buyAHouse from '../../../assets/icons/buy-a-house.svg';
import { Wrapper, ContentBox, ContentBoxHeader } from './style';

export default function SavingGoalCP(): JSX.Element {
  return (
    <Wrapper>
      <h2>
        Let's plan your <strong>saving goal.</strong>
      </h2>

      <ContentBox>
        <ContentBoxHeader>
          <img src={buyAHouse} alt="Buy a Car" />

          <div>
            <h3>Buy a House</h3>
            <span>Saving goal</span>
          </div>
        </ContentBoxHeader>

        <footer>
          <Button type="button">Confirm</Button>
        </footer>
      </ContentBox>
    </Wrapper>
  );
}
