import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComponentDetail
          author={'Sam'}
          timeAgo={'Today at 4:55pm'}
          avatar={faker.image.avatar()}
          blog={'Hello darkness old friend'}
        />
      </ApprovalCard>

      <ApprovalCard>
        <ComponentDetail
          author={'Alex'}
          timeAgo={'Today at 2:00pm'}
          avatar={faker.image.avatar()}
          blog={'I came to see you again'}
        />
      </ApprovalCard>

      <ApprovalCard>
        <ComponentDetail
          author={'Jane'}
          timeAgo={'Yesterday at 10pm'}
          avatar={faker.image.avatar()}
          blog={'Oh No !!'}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
