package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.Album;
import org.springframework.data.repository.CrudRepository;

public interface AlbumRepository extends CrudRepository<Album, Integer> {
}
