package de.fom.webtechnologien.web.rest;

import de.fom.webtechnologien.web.entities.Playlist;
import de.fom.webtechnologien.web.repos.PlaylistRepoository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/playlist")
public class PlaylistController {
    @Autowired
    PlaylistRepoository playlistRepoository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Playlist> getAllPlaylists() {
        return playlistRepoository.findAll();
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody Optional<Playlist> getSpecificPlaylist(@PathVariable Integer id) {
        // This returns a JSON or XML with the users
        return this.playlistRepoository.findById(id);
    }


    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody ResponseEntity<Playlist> addNewPlaylist (@RequestBody Playlist playlist) {
        Playlist n = new Playlist();
        n.setName(playlist.getName());
        n.setSongs(playlist.getSongs());
        n.setOwner(playlist.getOwner());
        playlistRepoository.save(n);
        return ResponseEntity.ok(n);
    }

}
