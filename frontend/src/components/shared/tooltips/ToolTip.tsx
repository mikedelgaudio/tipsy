import "./ToolTip.css";

interface ToolTip {
  text: string;
  className?: string;
}

function ToolTip({ text, className = "" }: ToolTip) {
  return (
    <div className={`tooltip ${className ? className : ""}`}>
      <div className="tooltip-arrow">
        <span className="tooltip-text">{text}</span>
      </div>
    </div>
  );
}

export default ToolTip;
