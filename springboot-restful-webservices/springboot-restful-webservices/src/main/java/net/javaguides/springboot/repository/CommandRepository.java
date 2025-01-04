package net.javaguides.springboot.repository;

import net.javaguides.springboot.entity.Command;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandRepository extends JpaRepository<Command, Long> {
}
