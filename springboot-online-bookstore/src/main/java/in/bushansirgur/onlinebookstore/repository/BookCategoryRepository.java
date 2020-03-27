package in.bushansirgur.onlinebookstore.repository;

import java.util.Locale.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookCategoryRepository extends JpaRepository<Category, Long> {

}
