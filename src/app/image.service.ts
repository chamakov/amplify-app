import { Injectable } from '@angular/core';
import { Image } from './image';

const ALL_IMAGES: Image[] = [
  {id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg', owner:'', tags:'tagsitititas,tagsotototas'},
    {id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg', owner:'', tags:'tagsitititas,tagsotototas'}
];

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getAllImages(){
    return ALL_IMAGES;
  }
}
