import Link from 'next/link';

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav className='text-sm font-medium'>
      <ol className='list-none p-0 inline-flex'>
        <li className='flex items-center'>
          <Link href='/'>
            <a className='text-gray-400 hover:text-gray-500'>Home</a>
          </Link>
          <svg
            className='fill-current w-3 h-3 mx-3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path
              d='M268 400l44-44c4.7-4.7 4.7-12.3 0-17L204.7 256l107.3-82c4.7-3.6 5.9-10.6 2.3-15.3L312.3 48.3c-3.6-4.7-10.6-5.9-15.3-2.3L8.7 239.7c-4.7 3.6-5.9 10.6-2.3 15.3L297.7 461.7c3.6 4.7 10.6 5.9 15.3 2.3z'
            />
          </svg>
        </li>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.title} className='flex items-center'>
              <Link href={crumb.href}>
                <a
                  className={`${
                    isLast ? 'text-gray-500' : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  {crumb.title}
                </a>
              </Link>
              {!isLast && (
                <svg
                  className='fill-current w-3 h-3 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    d='M268 400l44-44c4.7-4.7 4.7-12.3 0-17L204.7 256l107.3-82c4.7-3.6 5.9-10.6 2.3-15.3L312.3 48.3c-3.6-4.7-10.6-5.9-15.3-2.3L8.7 239.7c-4.7 3.6-5.9 10.6-2.3 15.3L297.7 461.7c3.6 4.7 10.6 5.9 15.3 2.3z'
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
