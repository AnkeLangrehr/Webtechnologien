package de.fom.webtechnologien.web.entities;

import jakarta.persistence.*;

@Entity
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private String imageLink;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "record_label_id")
    RecordLabel recordLabel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public RecordLabel getRecordLabel() {
        return recordLabel;
    }

    public void setRecordLabel(RecordLabel recordLabel) {
        this.recordLabel = recordLabel;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}
