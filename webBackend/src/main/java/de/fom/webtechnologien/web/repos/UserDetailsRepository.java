package de.fom.webtechnologien.web.repos;

import de.fom.webtechnologien.web.entities.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {

    UserDetails findByRefId(String refId);
}