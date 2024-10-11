import { Component, OnInit } from '@angular/core';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  desktops: any[] = []; // Data files yang ditampilkan
  folders: any[] = []; // Data folders di sidebar
  selectedFolder: any; // Folder yang dipilih
  showFilesPanel: boolean = false; // Kontrol tampilan panel files

  constructor(private httpProviderService: HttpProviderService) {}

  ngOnInit() {
    this.getFolders(); // Ambil data folder pada saat inisialisasi
    this.getFilesForParent(); // Ambil files dengan parent_id null untuk awal
  }

  getFolders() {
    // Contoh data folder, ini bisa diganti dengan API yang sesuai jika ada
    this.folders = [
      { label: 'Desktop', data: { id: 1 }, children: [] },
      { label: 'Documents', data: { id: 2 }, children: [] },
      { label: 'Downloads', data: { id: 3 }, children: [] },
    ];
  }

  onFolderSelect(event: any) {
    this.selectedFolder = event.node; // Simpan folder yang dipilih
    this.showFilesPanel = true; // Tampilkan panel files
    this.getFilesForParent(); // Ambil files untuk folder yang dipilih
  }

  getFilesForParent() {
    this.httpProviderService.getAllDesktop().subscribe(response => {
      console.log('API Response:', response);
      this.desktops = response.body[0]; // Mengassign array pertama dari body ke desktops
    }, error => {
      console.error('Error fetching files', error);
    });
  }

  navigateToSubfolder(parentId: number) {
    this.httpProviderService.getDesktopByParentId(parentId).subscribe(response => {
      console.log('Files for Parent ID:', response);
      this.desktops = response.body[0]; // Pastikan ini array
    }, error => {
      console.error('Error fetching files', error);
    });
  }
}
