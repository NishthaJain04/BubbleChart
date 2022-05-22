export const Line = ({ className, range }) => {
  return range.map((val, idx) => (
    <div key={idx} className={className}>
      {val}
    </div>
  ));
};
