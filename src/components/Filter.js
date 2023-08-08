//hooks
import useFilter from 'src/talons/useFilter';

/**
 * A component that provides filter options and handles filtering functionality.
 * @returns {JSX.Element} The JSX representation of the Filter component.
 */
const Filter = () => {
  const {
    filter,
    handleClearFilter,
    handleFilterValue,
    setshowFilters,
    showFilters,
    filteData,
  } = useFilter();

  return (
    <div className='relative'>
      <button aria-label='filter'>
        <div
          className='bg-slate-200 inline-block p-3 rounded font-bold hover:cursor-pointer justify-end'
          onClick={() => setshowFilters(!showFilters)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='font-bold'
            viewBox='0 0 16 16'
          >
            <path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
          </svg>
        </div>
      </button>
      <div>
        <ul>
          <div className='bg-slate-100 text-black w-32 absolute z-10 right-0  '>
            {showFilters &&
              filteData.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => handleFilterValue(e)}
                  className='p-3 cursor-pointer border-b-2 '
                >
                  {item}
                </li>
              ))}
          </div>
        </ul>
        {filter && (
          <div className='absolute right-0  top-16  bg-slate-800 text-white  flex items-center rounded-md    '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-x-circle-fill m-1 cursor-pointer'
              viewBox='0 0 16 16'
              onClick={handleClearFilter}
            >
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z' />
            </svg>
            <span className='w-24 p-2 text-sm'>{filter}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
