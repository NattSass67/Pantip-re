import { setTagChoosen } from '@/session/sessionReducers';
import { useAppDispatch, useAppSelector } from '@/session/store';

const CustomCheckBox = (params: { text: string; setTag: Function }) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.mySession.tagChoosen);
  const tagClick = () => {
    dispatch(setTagChoosen(params.text));
    params.setTag(params.text);
  };

  const buttonClicked: React.ReactNode = (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>checkbox-filled</title>{' '}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <g
            id="drop"
            fill="#000000"
            transform="translate(64.000000, 64.000000)"
          >
            {' '}
            <path
              d="M384,1.42108547e-14 L384,384 L1.42108547e-14,384 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M303.341465,82.7733333 L167.317333,236.793494 L98.66016,173.308288 L72.0065067,206.625365 L173.998374,296.75219 L336.658535,109.426989 L303.341465,82.7733333 Z"
              id="Combined-Shape"
            >
              {' '}
            </path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
  const buttonNoClick: React.ReactNode = (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>checkbox-component-mixed</title>{' '}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <g
            id="drop"
            fill="#000000"
            transform="translate(64.000000, 64.000000)"
          >
            {' '}
            <path
              d="M384,1.42108547e-14 L384,384 L1.42108547e-14,384 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M362.666667,21.3333333 L21.3333333,21.3333333 L21.3333333,362.666667 L362.666667,362.666667 L362.666667,21.3333333 Z M298.666667,170.666667 L298.666667,213.333333 L85.3333333,213.333333 L85.3333333,170.666667 L298.666667,170.666667 Z"
              id="Combined-Shape"
            >
              {' '}
            </path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
  return (
    <div className="flex flex-row justify-between">
      <div
        onClick={tagClick}
        aria-hidden="true"
        className="transition ease-in-out hover:-translate-y-1"
      >
        {params.text === selector ? buttonClicked : buttonNoClick}
      </div>
      <div>{params.text}</div>
    </div>
  );
};

export { CustomCheckBox };
