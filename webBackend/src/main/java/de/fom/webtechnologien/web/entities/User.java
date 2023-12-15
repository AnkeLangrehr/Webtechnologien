package de.fom.webtechnologien.web.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity // This tells Hibernate to make a table out of this class

@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private String email;


    private enum Role {
        ADMIN, USER
    }

}