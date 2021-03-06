import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const types = {
  h1: {
    classNames: ['text-9xl', 'uppercase'],
  },
  h2: {
    classNames: [],
  },
  h3: {
    classNames: [],
  },
  h4: {
    classNames: [],
  },
  h5: {
    classNames: [],
  },
  h6: {
    classNames: [],
  },
};

const allowedTypes = Object.keys(types);

const Heading = ({ as, children }) => {
  if (!allowedTypes.includes(as)) {
    throw Error(`Heading of ${as} is not allowed`);
  }

  const Head = as;
  const classNames = clsx(types[as].classNames);

  return (
    <>
      <Head className={classNames}>{children}</Head>
    </>
  );
};

Heading.propTypes = {
  as: PropTypes.string,
  // extra: PropTypes.arrayOf(PropTypes.string),
};

Heading.defaultProps = {
  as: 'h1',
  // extra: [],
};

export { Heading, allowedTypes };
