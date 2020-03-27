package in.bushansirgur.onlinebookstore.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import in.bushansirgur.onlinebookstore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
