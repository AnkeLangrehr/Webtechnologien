package de.fom.webtechnologien.web.rest;

import de.fom.webtechnologien.web.entities.RecordLabel;
import de.fom.webtechnologien.web.repos.RecordLabelRepository;
import de.fom.webtechnologien.web.repos.RecordLabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/recordLabel")
public class RecordLabelController {
    @Autowired
    private RecordLabelRepository recordLabelRepository;


    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody ResponseEntity<RecordLabel> addNewRecordLabel (@RequestBody RecordLabel recordLabel) {
        RecordLabel n = new RecordLabel();
        n.setName(recordLabel.getName());
        recordLabelRepository.save(n);
        return ResponseEntity.ok(n);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<RecordLabel> getAllRecordLabels() {
        return recordLabelRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody Optional<RecordLabel> getSpecificRecordLAbel(@PathVariable Integer id) {
        // This returns a JSON or XML with the users
        return this.recordLabelRepository.findById(id);
    }
}
