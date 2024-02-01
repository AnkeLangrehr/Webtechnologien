package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.Artist;
import de.fom.webtechnologien.web.entities.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface PlaylistRepoository extends CrudRepository<Playlist, Integer> {
}
