package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.Artist;
import org.springframework.data.repository.CrudRepository;

public interface ArtistRepository extends CrudRepository<Artist, Integer> {
}
