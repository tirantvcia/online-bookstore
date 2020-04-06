package in.bushansirgur.onlinebookstore.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import in.bushansirgur.onlinebookstore.entity.BookCategory;

// * Customizing Spring Data Rest > Configuring the Rest URL Path
@RepositoryRestResource(collectionResourceRel="bookCategory", path="book-category")
//@CrossOrigin("http://localhost:4200") eliminat amb config.getCorsRegistry()
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {
	
}
