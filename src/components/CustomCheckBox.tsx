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
      width="28px"
      height="28px"
      viewBox="0 0 21 22"
      xmlns="http://www.w3.org/2000/svg"
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
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)"
        >
          {' '}
          <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />{' '}
          <path d="m4.5 7.5 2 2 4-4" />{' '}
        </g>{' '}
      </g>
    </svg>
  );
  const buttonNoClick: React.ReactNode = (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 21 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)"
        />
      </g>
    </svg>
  );
  return (
    <div className="flex flex-row gap-x-4">
      <div
        onClick={tagClick}
        aria-hidden="true"
        className="transition ease-in-out hover:-translate-y-1"
      >
        {params.text === selector ? buttonClicked : buttonNoClick}
      </div>
      <div className="align-baseline">{params.text}</div>
    </div>
  );
};

export { CustomCheckBox };
