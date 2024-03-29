package de.fom.webtechnologien.web.rest;

import de.fom.webtechnologien.web.entities.Album;
import de.fom.webtechnologien.web.entities.Artist;
import de.fom.webtechnologien.web.repos.AlbumRepository;
import de.fom.webtechnologien.web.repos.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/artist")
public class ArtistController {

    @Autowired
    private ArtistRepository artistRepository;
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Artist> getAllArtists() {
        return artistRepository.findAll();
    }


    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody ResponseEntity<Artist> addNewArtist (@RequestBody Artist artist) {
        Artist n = new Artist();
        n.setName(artist.getName());
        n.setRecordLabel(artist.getRecordLabel());
        n.setImageLink(artist.getImageLink());
        artistRepository.save(n);
        return ResponseEntity.ok(n);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody Optional<Artist> getSpecificArtist(@PathVariable Integer id) {
        // This returns a JSON or XML with the users
        return this.artistRepository.findById(id);
    }

}
