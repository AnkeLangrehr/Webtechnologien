package de.fom.webtechnologien.web.rest;

import de.fom.webtechnologien.web.entities.Album;
import de.fom.webtechnologien.web.repos.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller // This means that this class is a Controller
@RequestMapping(path="/album")
public class AlbumController {
    @Autowired

    private AlbumRepository albumRepository;

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody ResponseEntity<Album> addNewAlbum (@RequestBody Album album) {
        Album n = new Album();
        n.setName(album.getName());
        albumRepository.save(n);
        return ResponseEntity.ok(n);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Album> getAllAlbum() {
        return albumRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody Optional<Album> getSpecificAlbum(@PathVariable Integer id) {
        // This returns a JSON or XML with the users
        return this.albumRepository.findById(id);
    }



}
