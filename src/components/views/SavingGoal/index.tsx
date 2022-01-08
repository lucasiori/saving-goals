import Button from '../../Button';
import MoneyInput from '../../MoneyInput';
import DateInput from '../../DateInput';
import { formatToNumber } from '../../../utils/format';
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
import useSavingGoal from '../../../hooks/use-saving-goal';

export default function SavingGoal(): JSX.Element {
  const {
    amount,
    monthlyAmount,
    reachDateInMonths,
    fullDate,
    setAmount,
    setReachDate,
  } = useSavingGoal();

  const formattedAmount = amount ? formatToNumber(amount) : undefined;
  const formattedMonthlyAmount = monthlyAmount
    ? formatToNumber(monthlyAmount)
    : undefined;

  function handleChangeDate(month: number, year: number): void {
    setReachDate({ month, year });
  }

  function getDisclaimerContent(): React.ReactNode {
    const formattedDepositWord = reachDateInMonths > 1 ? 'deposits' : 'deposit';

    if (!formattedAmount) {
      return (
        <>
          You’re planning
          <strong>
            {` ${reachDateInMonths} montlhy ${formattedDepositWord} `}
          </strong>
          to reach your goal by
          <strong>{` ${fullDate}.`}</strong>
        </>
      );
    }

    return (
      <>
        You’re planning
        <strong>
          {` ${reachDateInMonths} montlhy ${formattedDepositWord} `}
        </strong>
        to reach your
        <strong>{` $ ${formattedAmount} `}</strong>
        goal by
        <strong>{` ${fullDate}.`}</strong>
      </>
    );
  }

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
            <MoneyInput
              id="amount"
              value={amount}
              onChange={(value) => setAmount(value || 0)}
            />
          </div>

          <div>
            <label htmlFor="reachDate">Reach goal by</label>
            <DateInput id="reachDate" onChangeDate={handleChangeDate} />
          </div>
        </InputsGroup>

        <MonthlyAmount>
          <MonthAmountValue>
            <h5>Monthly amount</h5>
            <strong>{`$ ${formattedMonthlyAmount || ''}`}</strong>
          </MonthAmountValue>

          <MonthlyAmountDisclaimer>
            <p>{getDisclaimerContent()}</p>
          </MonthlyAmountDisclaimer>
        </MonthlyAmount>

        <footer>
          <Button type="button">Confirm</Button>
        </footer>
      </ContentBox>
    </Wrapper>
  );
}
