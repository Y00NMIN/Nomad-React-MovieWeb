"use strict";

function APP() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };

  const onInverted = () => {
    reset();
  };
  setInverted((current) => !current);

  return (
    <div>
      <h1>Hello wolrd</h1>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<APP />, root);
