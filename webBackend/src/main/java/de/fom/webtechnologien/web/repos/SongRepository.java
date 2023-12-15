package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Integer> {
}
