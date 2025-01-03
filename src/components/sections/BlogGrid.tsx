interface BlogGridProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ currentPage, onPageChange }) => {
  return (
    <div>
      {/* Temporary placeholder */}
      <div>Page {currentPage}</div>
      <button onClick={() => onPageChange(currentPage + 1)}>Next Page</button>
    </div>
  );
};

export default BlogGrid;