package net.javaguides.springboot.service;

import net.javaguides.springboot.entity.Client;

import java.util.List;

public interface ClientService {
    Client createClient(Client client);
    Client getClientById(Long id);
    List<Client> getAllClients();
    Client updateClient(Client client);
    void deleteClient(Long id);
}
