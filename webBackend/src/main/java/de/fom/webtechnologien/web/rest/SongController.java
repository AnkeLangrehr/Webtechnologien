package de.fom.webtechnologien.web.rest;

import de.fom.webtechnologien.web.entities.Artist;
import de.fom.webtechnologien.web.entities.Song;
import de.fom.webtechnologien.web.repos.ArtistRepository;
import de.fom.webtechnologien.web.repos.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@Controller
@RequestMapping("/song")
public class SongController {

    @Autowired
    private SongRepository songRepository;


    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody ResponseEntity<Song> addNewSong (@RequestBody Song song) {
        Song n = new Song();
        n.setName(song.getName());
        n.setAlbum(song.getAlbum());
        songRepository.save(n);
        return ResponseEntity.ok(n);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Song> getAllAlbum() {
        return songRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody Optional<Song> getSpecificAlbum(@PathVariable Integer id) {
        // This returns a JSON or XML with the users
        return this.songRepository.findById(id);
    }
}
