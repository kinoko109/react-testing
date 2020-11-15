import React from 'react';

const WorkList = (props) => {
  if (!props.works || !props.works.length) {
    return <h1>No Data!</h1>;
  }

  return (
    <div>
      <ul>
        {props.works.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkList;
