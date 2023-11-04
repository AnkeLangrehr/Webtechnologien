package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.User;
import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserTestRepository extends CrudRepository<User, Integer> {

}