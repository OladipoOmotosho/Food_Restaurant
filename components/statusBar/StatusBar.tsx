// import { DoneState, IdleState, OngoingState } from '../../assets';
import { FONTFAMILY, colors } from '../../utils';

const StatusBar = ({ icon, state, lines, mobilelines }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-4 sm:items-center">
        <span className="flex flex-row gap-2 sm:flex sm:flex-row sm:gap-4">
          <span>{icon}</span>
          <h3
            className="sm:text-[1rem] sm:leading-[1.3125rem] uppercase font-bold"
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
          >
            {state}
          </h3>
        </span>
        <span className="sm:block hidden">{lines}</span>
        <span className="sm:hidden block pl-3">{mobilelines}</span>
      </div>
    </div>
  );
};

export default StatusBar;
