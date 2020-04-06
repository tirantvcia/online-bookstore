package in.bushansirgur.onlinebookstore.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import in.bushansirgur.onlinebookstore.entity.Book;

//@CrossOrigin("http://localhost:4200") eliminat amb config.getCorsRegistry()
public interface BookRepository extends JpaRepository<Book, Long> {
	
	@RestResource(path="categoryid")
	Page<Book> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
