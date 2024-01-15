package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByLogin(String login);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}