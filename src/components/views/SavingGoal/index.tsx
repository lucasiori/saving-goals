import Button from '../../Button';
import DateInputCP from '../../DateInput';
import buyAHouse from '../../../assets/icons/buy-a-house.svg';
import {
  Wrapper,
  ContentBox,
  ContentBoxHeader,
  InputsGroup,
  MonthlyAmount,
  MonthAmountValue,
  MonthlyAmountDisclaimer,
} from './style';

export default function SavingGoal(): JSX.Element {
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

        <InputsGroup>
          <div>
            <label htmlFor="amount">Total amount</label>
            <input type="text" id="amount" name="amount" />
          </div>

          <div>
            <label htmlFor="reachDate">Reach goal by</label>
            <DateInputCP id="reachDate" />
          </div>
        </InputsGroup>

        <MonthlyAmount>
          <MonthAmountValue>
            <h5>Monthly amount</h5>
            <strong>$520.83</strong>
          </MonthAmountValue>

          <MonthlyAmountDisclaimer>
            <p>
              You’re planning <strong>48 monthly deposits</strong> to reach your
              <strong> $25,000</strong> goal by
              <strong> October 2020.</strong>
            </p>
          </MonthlyAmountDisclaimer>
        </MonthlyAmount>

        <footer>
          <Button type="button">Confirm</Button>
        </footer>
      </ContentBox>
    </Wrapper>
  );
}
