export function Tabs({ data, setExtensions }) {
  const toggleExtension = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  return (
    <div className="grid-col-3">
      {data.map((item, index) => (
        <div
          className="grid-card card-animate"
          key={item.name}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="grid-card-header">
            <img src={item.logo} width={36} alt={`${item.name} logo`} />
            <div className="grid-card-header__cont">
              <h4>{item.name}</h4>
              <span>{item.description}</span>
            </div>
          </div>
          <div className="grid-card-button">
            <button onClick={() => removeExtension(item.name)}>Remove</button>
            <label className="switch">
              <input
                type="checkbox"
                checked={item.isActive}
                onChange={() => toggleExtension(item.name)}
                aria-label={`Toggle ${item.name} extension`}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
