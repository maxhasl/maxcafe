function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <button key={id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
