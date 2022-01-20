export default function Button({ onChange, btnName }) {
  return (
    <div>
      <button className="btn" onClick={onChange}>
        {btnName}
      </button>
    </div>
  );
}
